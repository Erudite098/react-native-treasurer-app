import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import GradientCard from '@/components/ui/gradient-card';
import GradientText from '@/components/ui/gradient-text';
import { StyleSheet, Text, View } from 'react-native';


export default function Dashboard() {
  return (
    
    <View>
      {/* Header */}
      <Header text="Treasurer" fontWeight="extrabold"  />
      <Text style={styles.paymentDashboard}>Payment Dashboard</Text>
    

      <View>
        <Container>
        {/* Card will sit within the 23px padded area */}
          <GradientCard >
            <View>
              <GradientText 
              text="₱ 1,250.00" 
              fontSize={24} 
              fontWeight="Regular" 
              />
            
              <Text style={{ marginBottom: 7, color: '#CC5B8F', fontSize: 14 }}>
                Amount Colected
              </Text>

              <GradientText 
                text="₱ 2000.00" 
                fontSize={24} 
                fontWeight="Regular"  
              />

              <Text style={{ marginBottom: 10, color: '#CC5B8F', fontSize: 14 }}>
                Total Due
              </Text>

              <GradientText 
                text="Summer Course Fee" 
                fontSize={28} 
                fontWeight="Bold"
                style={{ marginBottom: 10}}
              />

               <GradientText 
                text="Paymnent for summer intensive courses" 
                fontSize={16} 
                fontWeight="Regular"
               
              />
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
  }
});