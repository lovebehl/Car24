import React, {Component} from 'react';
import {
  Platform,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import {getPostsAPI} from '../../redux/actions/post';
import ImageZoom from 'react-native-image-pan-zoom';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageView: false,
      modalVisible: false,
      isGrid: false,
      showImage: '',
      showImageId: null,
      isSwiping: false,
      numItems: 10,
    };
    this.ref = null;
  }
  componentDidMount() {
    const {getPostsAPI} = this.props;
    getPostsAPI();
  }
  onPress = (item) => {
    this.setState({
      showImage: item.url,
      showImageId: item.id,
      modalVisible: true,
    });
  };
  // Swipe Down to move next Image Method
  swipeDown = () => {
    if (!this.state.isSwiping) {
      this.ref.reset();
      var id = this.state.showImageId;
      var data = this.props.Post.data[id];
      this.setState(
        {
          showImage: data.url,
          showImageId: data.id,
        },
        () => {
          console.log(this.state);
        },
      );
    }
  };
  addMoreItems = () => {
    this.setState({
      numItems: this.state.numItems + 10,
    });
  };
  render() {
    const {Post} = this.props;
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? <SafeAreaView /> : null}
        <Header text={'Posts'} />
        <TouchableOpacity
          onPress={() => this.setState({isGrid: !this.state.isGrid})}>
          <Text>Change View</Text>
        </TouchableOpacity>
        <View style={styles.cardContainer}>
          {!!Post.data ? (
            <FlatList
              data={Post.data.slice(0, this.state.numItems)}
              numColumns={this.state.isGrid ? 2 : 1}
              maxToRenderPerBatch={10}
              key={this.state.isGrid ? 'h' : 'v'}
              keyExtractor={(item, index) => `${index}`} // we can use toString() also here instead of ` `
              renderItem={(rowData) => (
                <Card
                  data={rowData.item}
                  isGrid={this.state.isGrid}
                  onPress={this.onPress}
                />
              )}
              contentContainerStyle={styles.flatContainer}
              onEndReached={() => {
                this.addMoreItems();
              }}
            />
          ) : (
            <Text> Loading .... </Text>
          )}
        </View>
        {/* Modal View for Selected image */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <SafeAreaView>
            <Text
              onPress={() => {
                this.setState({modalVisible: false});
              }}>
              Close
            </Text>
            {/* Zoom Image Component */}
            <ImageZoom
              cropWidth={windowWidth}
              cropHeight={windowHeight}
              imageWidth={windowWidth}
              imageHeight={windowWidth}
              enableSwipeDown={true}
              onSwipeDown={() => {
                this.swipeDown(); //By Swipe Down of any Image you can go next image. We can use it as per requirement Swipe up animation or Down. (I used Swipe down for move next image after select any image)
              }}
              ref={(ref) => {
                this.ref = ref;
              }}>
              <Image
                style={{width: windowWidth, height: windowWidth}}
                source={{uri: this.state.showImage}}
              />
            </ImageZoom>
          </SafeAreaView>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Post: state.Post,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPostsAPI: () => {
      dispatch(getPostsAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
