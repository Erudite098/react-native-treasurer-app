import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import GradientCard from '@/components/ui/gradient-card';
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
            <Text style={{ fontSize: 16, color: '#000', marginBottom: 8 }}>
              Total Payments
            </Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#D8125A' }}>
              $12,345.67
            </Text>
            <Text style={{ fontSize: 14, color: '#666', marginTop: 8 }}>
              Last updated: 2 hours ago
            </Text>

          
          
           
              

          
          </GradientCard>
          
        </Container> 


      </View>

    </View>
   
  );
}


const styles = StyleSheet.create({
  paymentDashboard: { 
    color: '#D8125A',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 18,
    marginLeft: 23, // Align with container padding
  }
});