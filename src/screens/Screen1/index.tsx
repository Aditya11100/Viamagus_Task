/* eslint-disable react-native/no-inline-styles */
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IMAGES} from '../../utils/images';
import Button from '../../components/Button';
import RBSheet from 'react-native-raw-bottom-sheet';
import Screen2 from '../../components/Screen2';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const insets = useSafeAreaInsets();
  const refRBSheet = useRef();
  const navigations = useNavigation();

  return (
    <View
      style={{
        paddingTop: insets.top + 10,
        paddingBottom: insets.bottom + 10,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={styles.title}>Today’s Games</Text>
      <View style={{borderWidth: 1, borderColor: '#EEEAF3', marginTop: 25}}>
        <ImageBackground source={IMAGES.background1} style={styles.images}>
          <View style={{paddingHorizontal: 12}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 18,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.title1}>Under or Over</Text>
                <Image
                  source={IMAGES.exclametory_icon}
                  style={{marginLeft: 8}}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.title2}>Starting in</Text>
                <Image source={IMAGES.clock} style={{marginLeft: 8}} />
                <Text style={[styles.title2, {marginLeft: 8}]}>03:23:12</Text>
              </View>
            </View>
            <Text style={styles.desc1}>Bitcoin price will be under</Text>
            <Text style={styles.desc2}>$24,524 at 7 a ET on 22nd Jan’21</Text>
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: 16, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.subdetail}>PRIZE POOL</Text>
              <Text style={styles.subdetailText}>$12,000</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.subdetail}>UNDER</Text>
              <Text style={styles.subdetailText}>3.25x</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.subdetail}>OVER</Text>
              <Text style={styles.subdetailText}>1.25x</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.subdetail}>ENTRY FEE</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                }}>
                <Text style={[styles.subdetailText]}>5</Text>
                <View
                  style={{
                    height: 13,
                    width: 13,
                    borderRadius: 7,
                    backgroundColor: '#FFD600',
                    marginLeft: 8,
                    marginTop: 8,
                  }}
                />
              </View>
            </View>
          </View>
          <Text style={{color: '#727682', marginTop: 14, fontWeight: '600'}}>
            What’s your prediction?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Button
              text="Under"
              containerStyle={{
                width: '46%',
                borderRadius: 20,
                backgroundColor: '#452C55',
              }}
              image={IMAGES.downarrow}
            />
            <Button
              text="Over"
              containerStyle={{
                width: '46%',
                borderRadius: 20,
                backgroundColor: '#6231AD',
              }}
              image={IMAGES.uparrow}
              onPress={() => refRBSheet?.current?.open()}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F6F3FA',
            paddingHorizontal: 16,
            paddingTop: 18,
            paddingBottom: 22,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={IMAGES.person} style={{marginRight: 6}} />
              <Text style={{color: '#727682'}}>355 Players</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={IMAGES.graph} style={{marginRight: 6}} />
              <Text style={{color: '#727682'}}>View chart</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 10,
              width: '100%',
              borderRadius: 5,
              overflow: 'hidden',
              marginTop: 12,
            }}>
            <View style={{width: '70%', backgroundColor: '#FE4190'}} />
            <View style={{width: '30%', backgroundColor: '#2DABAD'}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            <Text style={{color: '#B5C0C8'}}>232 predicted under</Text>
            <Text style={{color: '#B5C0C8'}}>123 predicted over</Text>
          </View>
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={false}
        closeOnDragDown={true}
        height={450}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          draggableIcon: {
            height: 4,
            width: 30,
            backgroundColor: '#B5C0C8',
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 36,
          },
          container: {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          },
        }}>
        <Screen2
          buttonClick={() => {
            refRBSheet?.current?.close?.();
            navigations.navigate('BottomTab' as never);
          }}
        />
      </RBSheet>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  images: {
    height: 104,
    width: '100%',
  },
  title1: {
    color: '#D2BAF5',
    fontSize: 12,
    fontWeight: '600',
  },
  title2: {
    color: '#B296DC',
    fontSize: 12,
    fontWeight: '500',
  },
  desc1: {
    fontWeight: '600',
    color: '#D2BAF5',
    marginTop: 16,
    lineHeight: 19,
  },
  desc2: {
    fontWeight: '700',
    color: 'white',
    lineHeight: 20,
  },
  subdetail: {
    fontSize: 12,
    color: '#B5C0C8',
    fontWeight: '500',
  },
  subdetailText: {
    fontWeight: '600',
    marginTop: 8,
  },
});
