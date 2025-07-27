import CardComponent from '@/components/grouped-components/card-component';
import GradientFab from '@/components/individual-component/gradient-fab';
import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import { Plus } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
  return (
    
    <View style={styles.container}>
      {/* Header */}
      <Header text="Treasurer" fontWeight="extrabold"  />
      <Text style={styles.paymentDashboard}>Payment Dashboard</Text>
    
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Container>
      
          <CardComponent />
          <CardComponent />
          <CardComponent />
     
        </Container> 
      </ScrollView>

      {/* FAB positioned absolutely in bottom right */}
      <GradientFab 
        onPress={() => {}}
        icon={<Plus size={24} color="white" />}
      />

    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  paymentDashboard: { 
    color: '#D8125A',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 18,
    marginLeft: 23, // Align with container padding
  },
});