import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {POSTS} from '../data/data';
import {Divider} from 'react-native-elements';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface feedTypes {
  listRef: boolean;
  refHandler: (flatListRef: React.RefObject<FlatList<any>>) => void;
}
interface postHeaderTypes {
  user: {url: any; name: string};
}

interface postedOnType {
  date: Date;
}

interface postLikesType {
  likes: number;
}

interface postIconsType {
  index: number;
}

interface CommentButtonTypes {
  comments: {user: string; comment: string}[];
}

interface CommentsTypes {
  comments: {user: string; comment: string}[];
  showAllCommentsFlag: boolean;
}

const PostHeader: React.FC<postHeaderTypes> = ({user}) => {
  return (
    <View style={styles.postHeader}>
      <View style={styles.headerLeft}>
        <Image source={user.url} style={styles.userImageContainer} />
        <Text style={styles.postUserName}>{user.name}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.ellipses}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const NewComment: React.FC = () => {
  return (
    <View style = {styles.commentContainer}>
      <Icon
        name="person-outline"
        color="white"
        size={20}
      />
      <TextInput
        placeholder="Add a comment..."
        placeholderTextColor="grey"
        style={styles.addComment}
        multiline={true}
      />
    </View>
  );
};

const PostedDate: React.FC<postedOnType> = ({date}) => {
  const msDifference = new Date().getTime() - date.getTime();
  const seconds = Math.floor(msDifference / 1000);
  const minutes = Math.floor(msDifference / (1000 * 60));
  const hours = Math.floor(msDifference / (1000 * 60 * 60));
  const days = Math.floor(msDifference / (1000 * 60 * 60 * 24));
  //const years = Math.floor(days/365);
  console.log(new Date().toLocaleDateString());
  console.log(date.toLocaleDateString());
  console.log(seconds);
  console.log(minutes);
  console.log(hours);
  console.log(days);
  console.log();
  console.log();
  var datePosted;

  if (seconds < 60) {
    datePosted = seconds.toLocaleString('en-us') + ' seconds';
  } else if (minutes < 60 && minutes > 0) {
    datePosted = minutes.toLocaleString('en-us') + ' minutes';
  } else if (hours > 0 && hours < 24) {
    datePosted = hours.toLocaleString('en-us') + ' hours';
  } else if (days > 0 && days < 7) {
    datePosted = days.toLocaleString('en-us') + ' days';
  } else {
    datePosted = date.toLocaleDateString();
  }

  return (
    <View>
      <Text style={styles.dateText}> {datePosted} ago</Text>
    </View>
  );
};

const PostFooterIcons: React.FC<postIconsType> = ({index}) => {
  const [likeFlag, onChangeLikeFlag] = useState(false);
  const [bookmarkFlag, onChangeBookmarkFlag] = useState(false);

  const pressLikeHandler = () => {
    if (likeFlag) {
      POSTS[index].likes -= 1;
      onChangeLikeFlag(false);
    } else {
      POSTS[index].likes += 1;
      onChangeLikeFlag(true);
    }
  };

  const bookMarkHandler = () => {
    if (bookmarkFlag) {
      onChangeBookmarkFlag(false);
    } else {
      onChangeBookmarkFlag(true);
    }
  };
  return (
    <>
      <View style={styles.footerIcons}>
        <View style={styles.rightFooterIcon}>
          <TouchableOpacity onPress={pressLikeHandler}>
            <Icon
              style={styles.footerIcon}
              name={likeFlag ? 'heart' : 'heart-outline'}
              color={likeFlag ? 'red' : 'white'}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.footerIcon}
              name={'chatbubble-outline'}
              color="white"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.footerIcon}
              name={'paper-plane-outline'}
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rightFooterIcon}>
          <TouchableOpacity onPress={bookMarkHandler}>
            <Icon
              name={bookmarkFlag ? 'bookmark' : 'bookmark-outline'}
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Likes likes={POSTS[index].likes} />
    </>
  );
};

const Likes: React.FC<postLikesType> = ({likes}) => {
  return (
    <View>
      <Text style={styles.likesText}>
        {likes.toLocaleString('en-US')} likes
      </Text>
    </View>
  );
};

const Caption: React.FC<{caption: string; userName: string}> = ({
  caption,
  userName,
}) => {
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.text}>
        <Text style={styles.boldText}>{userName}</Text>
        <Text> {caption}</Text>
      </Text>
    </View>
  );
};

const Comments: React.FC<CommentButtonTypes> = ({comments}) => {
  const [showAllCommentsFlag, onChangeShowAllComments] = useState(false);
  const onPressHandler = () => {
    if (showAllCommentsFlag) {
      onChangeShowAllComments(false);
    } else {
      onChangeShowAllComments(true);
    }
  };
  return (
    <>
      <TouchableOpacity onPress={onPressHandler}>
        <View>
          {showAllCommentsFlag === false && (
            <Text style={styles.commentsButton}>
              View {comments.length > 1 ? 'all' : ''} {comments.length}{' '}
              {comments.length > 1 ? 'comments' : 'comment'}
            </Text>
          )}
          {showAllCommentsFlag && (
            <Text style={styles.commentsButton}>
              Hide {comments.length > 1 ? 'all' : ''} {comments.length}{' '}
              {comments.length > 1 ? 'comments' : 'comment'}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <AllCommentsButton comments={comments} showAllCommentsFlag={showAllCommentsFlag} />
      <NewComment />
    </>
  );
};

const AllCommentsButton: React.FC<CommentsTypes> = ({comments, showAllCommentsFlag}) => {
  return (
    <>
      {showAllCommentsFlag === true && (
        <FlatList
          data={comments}
          keyExtractor={item => item.user}
          renderItem={({item}) => {
            return (
              <View style={styles.commentsContainer}>
                <Text style={styles.text}>
                  <Text style={styles.boldText}>{item.user}</Text>
                  <Text> {item.comment}</Text>
                </Text>
              </View>
            );
          }}
        />
      )}

      {showAllCommentsFlag === false && (
        <View style={styles.commentsContainer}>
          <Text style={styles.text}>
            <Text style={styles.boldText}>{comments[0].user}</Text>
            <Text> {comments[0].comment}</Text>
          </Text>
        </View>
      )}
    </>
  );
};

const Feed: React.FC<feedTypes> = ({listRef, refHandler}) => {
  useEffect(() => {
    if (listRef) {
      refHandler(flatListRef);
    }
  }, [listRef, refHandler]);

  const flatListRef = useRef<FlatList>(null);

  return (
    <View style={styles.outterContainer}>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.flatListStyle}
        data={POSTS}
        renderItem={({item, index}) => {
          return (
            <View style={styles.Container}>
              <Divider width={0.5} orientation="horizontal" />
              <PostHeader user={item.user} />
              <Image style={styles.imageContainer} source={item.imageUrl} />
              <PostFooterIcons index={index} />
              <Caption caption={item.caption} userName={item.user.name} />
              <Comments comments={item.comments} />
              <PostedDate date={item.postedOn} />
            </View>
          );
        }}
        keyExtractor={item => {
          return item.postID.toString();
        }}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  Container: {
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  outterContainer: {},
  imageContainer: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  userImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderColor: '#ff8501',
    borderWidth: 3,
  },
  postHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 4,
    justifyContent: 'space-between',
  },
  postUserName: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  ellipses: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  footerIcon: {
    marginHorizontal: 4,
  },
  footerIcons: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  leftFooterIcons: {
    flexDirection: 'row',
  },
  rightFooterIcon: {
    flexDirection: 'row',
  },

  likesText: {
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  captionContainer: {
    marginTop: 10,
  },
  commentsButton: {
    color: 'grey',
  },
  commentsContainer: {},
  addComment: {
    color: 'white',
    tintColor: 'grey',
    marginLeft:10,
  },
  dateText: {
    color: 'grey',
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop:10,
    marginBottom:6,
  },
  flatListStyle: {
    paddingBottom:250,
  },
});
