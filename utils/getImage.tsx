import { Image } from "react-native";

export function getImage(weather:string, styles?:any) {
    switch(weather){
        case'01d':
            return <Image style={styles} source={require('../assets/photos/01d.png')} />
        case'01n':
            return <Image style={styles} source={require('../assets/photos/01n.png')} />
        case'02d':
            return <Image style={styles} source={require('../assets/photos/02d.png')} />
        case'02n':
            return <Image style={styles} source={require('../assets/photos/01n.png')} />
        case'03d':
            return <Image style={styles} source={require('../assets/photos/03d.png')} />
        case'04d':
            return <Image style={styles} source={require('../assets/photos/04d.png')} />
        case'09d':
            return <Image style={styles} source={require('../assets/photos/09d.png')} />
        case'09n':
            return <Image style={styles} source={require('../assets/photos/09n.png')} />
        case'10d':
            return <Image style={styles} source={require('../assets/photos/10d.png')} />
        case'10n':
            return <Image style={styles} source={require('../assets/photos/10n.png')} />
        case'11d':
            return <Image style={styles} source={require('../assets/photos/11d.png')} />
        case'13d':
            return <Image style={styles} source={require('../assets/photos/13d.png')} />
        case'13n':
            return <Image style={styles} source={require('../assets/photos/13n.png')} />
        case'50d':
            return <Image style={styles} source={require('../assets/photos/50d.png')} />
        case'50n':
            return <Image style={styles} source={require('../assets/photos/50n.png')} />
        default:
            return <Image style={styles} source={require('../assets/photos/03d.png')} />
    }
}