// TODO: Combine gradient-card, gradient-button, gradient-text all in one
// with parameters for title, subtitle, and content
import GradientButton from '@/components/individual-component/gradient-button';
import GradientCard from '@/components/individual-component/gradient-card';
import GradientText from '@/components/individual-component/gradient-text';
import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CardComponent() {
    return (
        <View>
            <Image source={require('@/assets/images/pig.png')} style={styles.pigImage} />
            {/* Card will sit within the 23px padded area */}
            <GradientCard >
                <View>
                <GradientText 
                text="₱ 1,250.00" 
                fontSize={22} 
                fontWeight="Regular" 
                />
                
                <Text style={{ 
                    marginBottom: 7, 
                    color: '#CC5B8F', 
                    fontSize: 12 }}>
                    Amount Colected
                </Text>

                <GradientText 
                    text="₱ 2000.00" 
                    fontSize={22} 
                    fontWeight="Regular"  
                />

                <Text style={{ 
                    marginBottom: 10, 
                    color: '#CC5B8F', 
                    fontSize: 12 }}>
                    Total Due
                </Text>

                <GradientText 
                    text="Summer Course" 
                    fontSize={22} 
                    fontWeight="Bold"
                    style={{ marginBottom: 10}}
                />

                <GradientText 
                    text="Paymnent for intensive courses" 
                    fontSize={14} 
                    fontWeight="Regular"
                
                />

                <GradientButton 
                    onPress={() => {}}
                    icon={<ChevronRight size={16} color="white" />}
                >
                    <Text style={{ 
                    fontSize: 12,
                    color: 'white', 
                    textAlign: 'center'}}>
                    View details
                    </Text>
                </GradientButton>
                </View>
                    
            </GradientCard>
                    
    

        </View>
    );
}   

const styles = StyleSheet.create({
  pigImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 10,
    top: 0,
    zIndex: 1,
  }
});
