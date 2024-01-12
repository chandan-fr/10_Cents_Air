import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const BgGradient = ({ width, height }) => {
    return (
        <LinearGradient
            colors={["rgba(67, 89, 112, 1)", "rgba(102, 152, 197, 0.75)"]}
            style={{
                width: width,
                height: height * 0.62,
                position: "absolute",
            }}
        />
    )
};

export default BgGradient;