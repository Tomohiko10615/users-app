import React, { useEffect, useState } from 'react'

import { View, Text, FlatList } from 'react-native'

export const ContractsScreen = () => {
    const [isLoading, setLoading] = useState(true);

    return (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text>Contratos</Text>
        </View>
    )
}
