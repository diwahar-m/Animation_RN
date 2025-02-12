import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated'


const ReanimatedFormValidation: React.FC = () => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('') 

    const emailShake = useSharedValue(0); 
    const passwordShake = useSharedValue(0);  
    const emailCheckMark = useSharedValue(0);  
    const passwordCheckMark = useSharedValue(0);  
    const emailErrorheight = useSharedValue(0); 
    const passwordErrorheight = useSharedValue(0); 


    const validateEmail = (text: string) =>{
        const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
        if(!text){
            setEmailError('Email is required')
            return false;
        } else if(!emailRegex.test(text)){
            setEmailError('Invalid Email Format');
            return false;
        }
        setEmailError('');
        return true;
    }

    const handleEmailChange = (text: string) =>{
        setEmail(text)
        //validate the email
        const isValidEmail = validateEmail(text);
        emailCheckMark.value = withSpring(isValidEmail ? 1: 0)

        if(!isValidEmail){
            emailShake.value = withSequence(
                withTiming(-10, {duration: 50}),
                withTiming(10, {duration: 100}),
                withTiming(0, {duration: 50}),
            )
            emailErrorheight.value = withSpring(20)
        } else {
            emailErrorheight.value = withSpring(0)
        }
    }

    const validatePassword = (text:string)=> {
        if(!text){
            setPasswordError('Password is required')
            return false;
        } else if(text.length < 6){
            setPasswordError('Password musst be at least 6 characters')
            return false;
        }
        setPasswordError('');
        return true;
    }

    const handlePasswordChange = (text: string) =>{
        const isValidPassword = validatePassword(text)
        passwordCheckMark.value = withSpring(isValidPassword? 1: 0) 

        if(!isValidPassword){
            passwordShake.value = withSequence(
                withTiming(-10, {duration: 50}),
                withTiming(10, {duration: 100}),
                withTiming(0, {duration: 50}),
            )
            passwordErrorheight.value = withSpring(20)
        } else {
            passwordErrorheight.value = withSpring(0)
        }
    }

    const onSubmit = (email: string, password: string) => {
        
    }

    const handleFormSubmit = () =>{
        const isValidEmail = validateEmail(email); 
        const isValidPassword = validatePassword(password); 

        if(isValidEmail && isValidPassword){
            onSubmit(email, password)
        }else {
            if(!isValidEmail){
                emailShake.value = withSequence(
                withTiming(-10, {duration: 50}),
                withTiming(10, {duration: 100}),
                withTiming(0, {duration: 50}),
            )
            emailErrorheight.value = withSpring(20)
            }
            if(!isValidPassword){
                passwordShake.value = withSequence(
                withTiming(-10, {duration: 50}),
                withTiming(10, {duration: 100}),
                withTiming(0, {duration: 50}),
                 )
                passwordErrorheight.value = withSpring(20)

            }
        }
    }

    const emailAnimationStyle = useAnimatedStyle(()=>({
        transform:[{
            translateX: emailShake.value
        }]
    }))
    const passwordAnimationStyle = useAnimatedStyle(()=>({
        transform:[{
            translateX: passwordShake.value
        }]
    }))
    const emailCheckMarkStyle = useAnimatedStyle(()=>({
        opacity: emailCheckMark.value, 
        transform:[
            {
            scale: emailCheckMark.value
            }, 
            {
                rotate: `${emailCheckMark.value * 360}deg`
            }
        ]
    }))

    const passwordCheckMarkStyle = useAnimatedStyle(()=>({
        opacity: passwordCheckMark.value, 
        transform:[
            {
            scale: passwordCheckMark.value
            }, 
            {
                rotate: `${passwordCheckMark.value * 360}deg`
            }
        ]
    }))

    const emailErrorStyle = useAnimatedStyle(()=>( {
        height: emailErrorheight.value, 
        opacity: emailErrorheight.value === 0 ? 0 : 1, 
        transform: [{
            translateY: withSpring(emailErrorheight.value / 2)
        }]

    }))

    const passwordErrorStyle = useAnimatedStyle(()=>( {
        height: passwordErrorheight.value, 
        opacity: passwordErrorheight.value === 0 ? 0 : 1, 
        transform: [{
            translateY: withSpring(passwordErrorheight.value / 2)
        }]

    }))
 
  return (
    <View style={styles.container}>
        <Animated.View style={[styles.inputContainer, emailAnimationStyle]}>
            <TextInput 
                style={styles.inputComp}
                placeholder='Email address'
                keyboardType='email-address'
                autoCapitalize='none'
                value={email}
                onChangeText={handleEmailChange}
            />
            <Animated.View style={[styles.checkmark, emailCheckMarkStyle]}>
                <Text style={styles.checkmarkText}></Text>
            </Animated.View>
        </Animated.View>
        <Animated.Text style={[styles.errorText, emailErrorStyle]}>{emailError}</Animated.Text>
        <Animated.View style={[styles.inputContainer, passwordAnimationStyle]}>
            <TextInput 
                style={styles.inputComp}
                placeholder='Passsword'
                secureTextEntry
                value={password}
                onChangeText={handlePasswordChange}
            />
            <Animated.View style={[styles.checkmark, passwordCheckMarkStyle]}>
                <Text style={styles.checkmarkText}></Text>
            </Animated.View>
        </Animated.View>
        <Animated.Text style={[styles.errorText, passwordErrorStyle]}>{passwordError}</Animated.Text>
        <Pressable style={styles.submitButton} onPress={handleFormSubmit}>
            <Text style={styles.submitButtonTxt}> Submit</Text>
        </Pressable>s
     </View>
  )
}

export default ReanimatedFormValidation

const styles = StyleSheet.create({
    container: {
       padding: 20,
       backgroundColor: '#f0f0f0',
       borderRadius: 10, 
       shadowColor: '#000', 
       shadowRadius: 10, 
       shadowOpacity: 0.1, 
       shadowOffset: {
        width: 0, 
        height: 2
       }, 
       elevation: 5
    },
    headerTxt: {
        fontSize: 18, 
        fontWeight: 'bold'
    },
    inputContainer: {
        flexDirection:'row', 
        alignItems: 'center', 
        marginBottom: 5

    }, 
    inputComp: {
        flex: 1, 
        height: 50, 
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 25, 
        paddingHorizontal: 15, 
        fontSize: 18, 
        backgroundColor: '#ffffff',
    }, 
    checkmark: {
        position: 'absolute', 
        right: 15, 
        width: 20,
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    checkmarkText: {
        color: '#40ad44', 
        fontSize: 16, 
        fontWeight: 'bold'
    }, 
    errorText: {
        color: '#ff5255', 
        fontSize: 12, 
        marginBottom: 10, 
        paddingHorizontal: 15
    } ,
    submitButton: {
        backgroundColor:'#2196f3', 
        paddingVertical: 12, 
        borderRadius: 24, 
        alignItems: 'center', 
        marginTop: 10
    }, 
    submitButtonTxt: {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 18
    }
})