import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Button from '../Components/Button';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from "@react-navigation/native";

const OTPscreen1 = forwardRef((props, ref) => {
  const navigation = useNavigation();
    const [cca2, setCCA2] = useState('pk'); 
    const [phoneInputValue, setPhoneInputValue] = useState('');
    const countryPickerRef = useRef(null);
    const phoneRef = useRef(null);

    const onPressFlag = () => {
        countryPickerRef.current?.openModal();
    }

    // const selectCountry = (country) => {
    //     setCCA2(country.cca2);
    //     phoneRef.current?.selectCountry(country.cca2.toLowerCase());
    //     setPhoneInputValue(`+${country.callingCode}`);
    // }

    const onPhoneInputChange = (value, iso2) => {
        setPhoneInputValue(value);
    }

    // Expose methods to parent components


    return (
        <View style={styles.blackareaview}>
            <View style={styles.container}>
                <View style={styles.indicator}>
                    <View style={styles.indicatorhighlight1}></View>
                    <View style={styles.indicatorhighlight2}></View>
                    <View style={styles.indicatorhighlight3}></View>
                </View>

                <View style={styles.textview}>
                    <Text style={styles.txt}>Let's Get Started</Text>
                    <Text style={styles.txt1}>Enter Your Phone Number</Text>
                </View>

               
            </View>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
    <View style={{borderWidth: 7, borderColor: "black", width: "80%"}}>
        <PhoneInput
            ref={phoneRef}
            onPressFlag={onPressFlag}
            initialCountry={cca2}
            initialValue={phoneInputValue}
            onChangePhoneNumber={onPhoneInputChange}
            textProps={{
                placeholder: 'Enter a phone number...',
                style: {
                    backgroundColor: 'white',
                    color: 'black' // For text input color
                }
            }}
            style={{backgroundColor: 'white'}} // For placeholder background color
        />

        {/* <CountryPicker
            ref={countryPickerRef}
            onChange={(value) => selectCountry(value)}
            translation='eng'
            cca2={cca2}
        >
            <View></View>
        </CountryPicker> */}
    </View>
</View>
<Button 
          title="Next" onPress={() => navigation.navigate("OTPscreen2")}/>

        </View>
    );
});
const styles = StyleSheet.create({
    container: {
       
        height: 200,
        backgroundColor: "white",
        borderBottomRightRadius: 180,
        borderBottomLeftRadius: 180,
        overflow: "hidden",
    },
    indicator: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    indicatorhighlight1: {
        backgroundColor: "#37C6F5",
        width: 50,
        height: 8,
        borderRadius: 7,
        margin: 10,
    },
    indicatorhighlight2: {
        width: 50,
        height: 8,
        borderRadius: 4,
        backgroundColor: "lightgray",
        margin: 10,
        border: 7,
        borderColor: "#9B9B9B",
    },
    indicatorhighlight3: {
        backgroundColor: "lightgray",
        width: 50,
        height: 8,
        borderRadius: 4,
        margin: 10,
    },
    textview: {
        marginTop:20,
    },
    txt: {
        color: "black",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
    },
    txt1: {
        fontSize: 17,
        color: "black",
        textAlign: "center",
    },
    blackareaview: {
        width:"100%",
        height: "100%",
        backgroundColor:'black'
    },
});

export default OTPscreen1;
