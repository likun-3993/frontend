import React, { useRef, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [] }) {
  const scrollView = useRef();
  const [imageUri, setImageUri] = useState();

  const handleAdd = (uri) => {
    setImageUri([...imageUri, uri]);
  };
  const handleRemove = (uri) => {
    setImageUri(imageUri.filter((imageUri) => imageUri != uri));
  };
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => handleRemove(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => handleAdd(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;

// const [image, setImage] = useState(null);

// const pickImage = async () => {
//   // No permissions request is necessary for launching the image library
//   let result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.All,
//     allowsEditing: true,
//     aspect: [4, 3],
//     quality: 1,
//   });

//   console.log(result);

//   if (!result.cancelled) {
//     setImage(result.uri);
//   }
// };
