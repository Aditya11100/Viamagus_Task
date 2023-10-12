import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DATA} from '../utils/data';
import {IMAGES} from '../utils/images';

const Badges = () => {
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.item}>
        <Image source={IMAGES.randomImage} />
        <View style={{marginLeft: 14, flexShrink: 1}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'rgba(98,49,173,0.06)', flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 5}}
      />
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingLeft: 18,
    paddingRight: 20,
    marginTop: 12,
    borderRadius: 5,
    borderColor: '#EEEAF3',
    borderWidth: 1,
  },
  title: {
    fontWeight: '600',
    color: '#333333',
    marginBottom: 6,
  },
  desc: {
    fontWeight: '500',
    color: '#727682',
    lineHeight: 20,
  },
});
