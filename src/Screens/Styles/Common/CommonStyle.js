import { StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b74e4',
    borderBottomRightRadius: 130,
    marginBottom: 30,
  },
  textInputView: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#1b74e4',
    borderRadius: 40,
    padding: 5,
    paddingLeft: 15,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  textInput: {
    padding: 5,
    fontSize: 18,
    width: '85%',
    color: '#1b74e4',
  },
  rowView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  rowViewFlexStart: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  itemSepratorView: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ccceee',
  },
  btnTouchable: {
    width: '100%',
    height: 50,
    backgroundColor: '#1b74e4',
    marginVertical: 20,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnCreatePost: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    height: 40,
    paddingLeft: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },

  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  largeImage: {
    height: 200,
    width: 200,
    borderRadius: 200,
    backgroundColor: '#ccceee',
    marginRight: 10,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderWidth: 6,
    borderColor: '#ddd',
    marginVertical: 25,
  },
  normalImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: '#ccceee',
    marginRight: 10,
  },
  smallImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#ccceee',
    marginRight: 10,
  },
  postCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 4,
  },
  postText: {
    flex: 1,
    fontWeight: '300',
    fontSize: 22,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  textBold: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  txtAuthorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    flex: 1,
  },
  txtLikeCount: {
    marginHorizontal: 10,
    fontWeight: '600',
    fontSize: 20,
    color: '#65676b',
  },
  bottomNavigationView: {
    backgroundColor: '#ffff',
    width: '100%',
    // height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default CommonStyles;