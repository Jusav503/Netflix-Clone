import { Feather } from '@expo/vector-icons';
import React from 'react'
import { View, Text, Image } from 'react-native'

import { Episode } from '../../types';
import styles from './styles'

interface EpisodeItemProps { episode: Episode }

const EpisodeItem = (props:EpisodeItemProps) => {
    const { episode } = props;
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{flexDirection: "row"}}>
                    <Image style={styles.posterContainer}source={{uri: episode.poster}} />
                    <View style={styles.numberEpisode}>
                       <Text style={styles.whiteText}>{episode.title}</Text> 
                       <Text style={{ color: "grey", fontSize: 10}}>{episode.duration}</Text> 
                    </View>
                </View>
                <Feather  name="download" size={20} color="white" />    
            </View>
           <Text style={styles.whiteText}>{episode.plot}</Text>
        </View>
    )
}

export default EpisodeItem
