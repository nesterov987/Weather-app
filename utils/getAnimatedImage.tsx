import Animated from "react-native-reanimated"


export function getAnimatedImage(weather:string, animatedStyle:any) {
    switch(weather){
        case'01d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/01d.png')} />
        case'01n':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/01n.png')} />
        case'02d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/02d.png')} />
        case'02n':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/01n.png')} />
        case'03d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/03d.png')} />
        case'04d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/04d.png')} />
        case'09d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/09d.png')} />
        case'09n':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/09n.png')} />
        case'10d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/10d.png')} />
        case'10n':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/10n.png')} />
        case'11d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/11d.png')} />
        case'13d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/13d.png')} />
        case'13n':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/13n.png')} />
        case'50d':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/50d.png')} />
        case'50n':
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/50n.png')} />
        default:
            return <Animated.Image style={animatedStyle} source={require('../assets/photos/03d.png')} />
    }
}