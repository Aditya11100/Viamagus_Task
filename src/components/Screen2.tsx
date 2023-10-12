/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from 'react-native-wheel-pick';
import Button from './Button';

interface Screen2Props {
  buttonClick: () => void;
}

const Screen2 = ({buttonClick}: Screen2Props) => {
  const [sliderValue, setSliderValue] = useState<number>(14);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <Text style={styles.title1}>Your Prediction is Under</Text>
        <Text style={styles.title2}>ENTRY TICKETS</Text>
        <Pressable>
          <Picker
            style={{backgroundColor: 'white', width: '100%', height: 215}}
            selectedValue={sliderValue}
            pickerData={[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            ]}
            onValueChange={value => {
              setSliderValue(value);
            }}
          />
        </Pressable>
        <Text style={{fontSize: 12, fontWeight: '500', color: '#B5C0C8'}}>
          You can win
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '600', color: '#03A67F'}}>$2000</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: '500', fontSize: 12, color: '#727682'}}>
              Total
            </Text>
            <View style={styles.yellowCircle} />
            <Text style={{fontWeight: '600'}}>5</Text>
          </View>
        </View>
        <Button
          text="Submit my prediction"
          containerStyle={{
            borderRadius: 20,
            backgroundColor: '#6231AD',
            marginTop: 25,
          }}
          textStyle={{
            fontWeight: '600',
          }}
          onPress={() => buttonClick()}
        />
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  horizontalDrawer: {
    height: 4,
    width: 30,
    backgroundColor: '#B5C0C8',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 36,
  },
  title1: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
  },
  title2: {
    fontSize: 12,
    fontWeight: '600',
    color: '#727682',
    marginTop: 20,
  },
  yellowCircle: {
    height: 13,
    width: 13,
    borderRadius: 7,
    backgroundColor: '#FFD600',
    marginLeft: 5,
    marginRight: 5,
  },
});
