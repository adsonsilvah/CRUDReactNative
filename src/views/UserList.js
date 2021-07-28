import { getActionFromState } from '@react-navigation/native';
import React from 'react';
import  { Text , View, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import users from '../data/users'


export default props => {

    function getActions(user){
        return(
            <>
            <Button
            onPress = {() => props.navigation.navigate('UseForm', user)}
            type = "clear"
            icon = {
                <Icon name= "edit" size = {25} color = "orange"/>
            }
            />
             <Button
            onPress = {() => props.navigation.navigate('UseForm', user)}
            type = "clear"
            icon = {
                <Icon name= "delete" size = {25} color = "red"/>
            }
            />
            </>
        )
    }

    function getUserItem({item : user}){
        return(
            <ListItem
            leftAvatar = {{source : {uri: user.avatarUrl}}}
            key = {user.id}
            title = {user.name}
            subtitle = {user.email}
            bottomDivider
            rightElement = {getActions(user)}
            onPress = {() =>
            props.navigation.navigate('UserForm', user)
            }
            />
        )
    }
    return(
        <View>
            <FlatList
            keyExtractor = {user => user.id.toString()}
            data = {users}
            renderItem = {getUserItem}
            />
        </View>
    );
}