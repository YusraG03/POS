import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function OpenRegisterScreen() {
  const [coins, setCoins] = useState(Array(8).fill('0.00'));
  const [bills, setBills] = useState(Array(5).fill('0.00'));
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    alert('Register opened successfully!');
  };

  const handleKickDrawer = () => {
    alert('Drawer kicked open!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Green Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Open Register</Text>
      </View>

      {/* Section Titles */}
      <View style={styles.sectionTitles}>
        <Text style={styles.sectionTitle}>COINS</Text>
        <Text style={styles.sectionTitle}>NOTES</Text>
        <TouchableOpacity onPress={handleKickDrawer}>
          <Text style={styles.kickDrawer}>Kick Drawer</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Coins Section */}
        <View style={styles.coinsSection}>
          {coins.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={value}
              onChangeText={(text) => {
                const newCoins = [...coins];
                newCoins[index] = text;
                setCoins(newCoins);
              }}
              keyboardType="numeric"
            />
          ))}
        </View>

        {/* Notes Section */}
        <View style={styles.notesSection}>
          <TextInput
            style={styles.notesInput}
            multiline
            placeholder="Enter notes here"
            value={notes}
            onChangeText={setNotes}
          />
        </View>
      </View>

      {/* Set Bills Section */}
      <View style={styles.sectionTitles}>
        <Text style={styles.sectionTitle}>BILLS</Text>
        <TouchableOpacity>
          <Text style={styles.setBillsZero}>Set Bills to 0</Text>
        </TouchableOpacity>
      </View>

      {/* Bills Section */}
      <View style={styles.billsSection}>
        {bills.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={value}
            onChangeText={(text) => {
              const newBills = [...bills];
              newBills[index] = text;
              setBills(newBills);
            }}
            keyboardType="numeric"
          />
        ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Currency in Drawer */}
      <Text style={styles.currencyInDrawer}>Currency in Drawer</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  topBar: {
    width: '100%',
    height: 80,
    backgroundColor: '#057300',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  topBarTitle: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  sectionTitles: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  kickDrawer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1790f3',
  },
  mainContent: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  coinsSection: {
    flex: 1,
    alignItems: 'center',
  },
  notesSection: {
    flex: 1,
    marginLeft: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    height: 45,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  notesInput: {
    backgroundColor: '#fff',
    height: 200,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    textAlignVertical: 'top',
  },
  billsSection: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  setBillsZero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1790f3',
  },
  submitButton: {
    backgroundColor: '#293a8b',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 80,
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  currencyInDrawer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
});
