import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import GradientButton from '@/components/ui/gradient-button';
import GradientCard from '@/components/ui/gradient-card';
import GradientText from '@/components/ui/gradient-text';
import { ChevronRight } from 'lucide-react-native';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function Dashboard() {
  return (
    
    <View>
      {/* Header */}
      <Header text="Treasurer" fontWeight="extrabold"  />
      <Text style={styles.paymentDashboard}>Payment Dashboard</Text>
    

      <View>
      <Image source={require('@/assets/images/pig.png')} style={styles.pigImage} />
        <Container>
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
                   
        </Container> 


      </View>

    </View>
   
  );
}


const styles = StyleSheet.create({
  paymentDashboard: { 
    color: '#D8125A',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 18,
    marginLeft: 23, // Align with container padding
  },
  pigImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 35,
    top: 0,
    zIndex: 1,
  }
});