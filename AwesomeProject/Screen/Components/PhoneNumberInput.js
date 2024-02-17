import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View , StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

const PhoneNumberInput = forwardRef((props, ref) => {
    const [cca2, setCCA2] = useState('us');
    const [phoneInputValue, setPhoneInputValue] = useState('');
    const phoneRef = useRef(null);
    const countryPickerRef = useRef(null);

    const onPressFlag = () => {
        countryPickerRef.current?.openModal();
    }

    const selectCountry = (country) => {
        setCCA2(country.cca2);
        phoneRef.current.selectCountry(country.cca2.toLowerCase());
        // Update phone input value with selected country code
        setPhoneInputValue(`+${country.callingCode}`);
    }

    const onPhoneInputChange = (value, iso2) => {
        setPhoneInputValue(value);
    }

    // Expose functions to parent component using ref
    useImperativeHandle(ref, () => ({
        selectCountry: selectCountry
    }));

    return (
        <View style={{borderWidth:7,borderColor:"black", width:"80%"}}>
            <PhoneInput
                ref={phoneRef}
                onPressFlag={onPressFlag}
                initialCountry={cca2}
                initialValue={phoneInputValue}
                onChangePhoneNumber={onPhoneInputChange}
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />

            <CountryPicker
                ref={countryPickerRef}
                onChange={(value) => selectCountry(value)}
                translation='eng'
                cca2={cca2}
            >
                <View></View>
            </CountryPicker>
        </View>
    );
});

const styles = StyleSheet.create({
  
});

export default PhoneNumberInput;
