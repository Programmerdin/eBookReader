//create react native app
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
//import C:\Users\testi\Desktop\Local Coding\eBookReader\my-app\book\test\text\part0004_split_010.html
import part0004_split_010 from "../book/test/text/part0004_split_010.html";

const TextDisplay = () => {
  const part = part0004_split_010;
  const text_example =
    "fdkfjldjsfljsldfjlskdjflsdjf alkjgdlkjg lkdjgflkdjgkld kdjfauieghjknf uio 23jo1j kldanglk3tlk jasdn lskj jie hgihigehi anvmcnvmcn  ,zmnmx nmf ei nvi nie 2 i2j42in42i n kd nk nskan lk lkdas j92al klkjr1l2or a;z;z;z;  9r3ur9j 39 091 jr1 j a,c n kn oian iong oien voin ow ni ei nwoinq ei n93 n99 1n223847ut 4 44 kjljal  nvnnv nsn nnqnq nnwnw nnw nqn lknkn d;alkedmfn l nwaen laknklfn ln1ok3nknr4k nkn4kn3kn kn1l2n m2 nmn1 ,1 ,n1,n 1,n 2,n3,24 b2nb4n2b n1b2n1 2nb fdkfjldjsfljsldfjlskdjflsdjf alkjgdlkjg lkdjgflkdjgkld kdjfauieghjknf uio 23jo1j kldanglk3tlk jasdn lskj jie hgihigehi anvmcnvmcn  ,zmnmx nmf ei nvi nie 2 i2j42in42i n kd nk nskan lk lkdas j92al klkjr1l2or a;z;z;z;  9r3ur9j 39 091 jr1 j a,c n kn oian iong oien voin ow ni ei nwoinq ei n93 n99 1n223847ut 4 44 kjljal  nvnnv nsn nnqnq nnwnw nnw nqn lknkn d;alkedmfn l nwaen laknklfn ln1ok3nknr4k nkn4kn3kn kn1l2n m2 nmn1 ,1 ,n1,n 1,n 2,n3,24 b2nb4n2b n1b2n1 2nb fdkfjldjsfljsldfjlskdjflsdjf alkjgdlkjg lkdjgflkdjgkld kdjfauieghjknf uio 23jo1j kldanglk3tlk jasdn lskj jie hgihigehi anvmcnvmcn  ,zmnmx nmf ei nvi nie 2 i2j42in42i n kd nk nskan lk lkdas j92al klkjr1l2or a;z;z;z;  9r3ur9j 39 091 jr1 j a,c n kn oian iong oien voin ow ni ei nwoinq ei n93 n99 1n223847ut 4 44 kjljal  nvnnv nsn nnqnq nnwnw nnw nqn lknkn d;alkedmfn l nwaen laknklfn ln1ok3nknr4k nkn4kn3kn kn1l2n m2 nmn1 ,1 ,n1,n 1,n 2,n3,24 b2nb4n2b n1b2n1 2nb fdkfjldjsfljsldfjlskdjflsdjf alkjgdlkjg lkdjgflkdjgkld kdjfauieghjknf uio 23jo1j kldanglk3tlk jasdn lskj jie hgihigehi anvmcnvmcn  ,zmnmx nmf ei nvi nie 2 i2j42in42i n kd nk nskan lk lkdas j92al klkjr1l2or a;z;z;z;  9r3ur9j 39 091 jr1 j a,c n kn oian iong oien voin ow ni ei nwoinq ei n93 n99 1n223847ut 4 44 kjljal  nvnnv nsn nnqnq nnwnw nnw nqn lknkn d;alkedmfn l nwaen laknklfn ln1ok3nknr4k nkn4kn3kn kn1l2n m2 nmn1 ,1 ,n1,n 1,n 2,n3,24 b2nb4n2b n1b2n1 2nb fdkfjldjsfljsldfjlskdjflsdjf alkjgdlkjg lkdjgflkdjgkld kdjfauieghjknf uio 23jo1j kldanglk3tlk jasdn lskj jie hgihigehi anvmcnvmcn  ,zmnmx nmf ei nvi nie 2 i2j42in42i n kd nk nskan lk lkdas j92al klkjr1l2or a;z;z;z;  9r3ur9j 39 091 jr1 j a,c n kn oian iong oien voin ow ni ei nwoinq ei n93 n99 1n223847ut 4 44 kjljal  nvnnv nsn nnqnq nnwnw nnw nqn lknkn d;alkedmfn l nwaen laknklfn ln1ok3nknr4k nkn4kn3kn kn1l2n m2 nmn1 ,1 ,n1,n 1,n 2,n3,24 b2nb4n2b n1b2n1 2nb";

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
          <Text style={styles.text_style}>{text_example}</Text>
      </ScrollView>
    </View>
  );
};

export default TextDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    width: "80%",
  },
  scrollview: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  text_style: {
    fontSize: 20,
    color: "black",
  },
});
