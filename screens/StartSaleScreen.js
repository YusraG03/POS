import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function StartSaleScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Sale - New (no items added)</Text>
      </View>

      <View style={styles.mainContent}>
        
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Add an Item</Text>
          <TextInput placeholder="Search" style={styles.searchBar} placeholderTextColor="#a09f9f" />

          <ScrollView contentContainerStyle={styles.categories}>
            {[
              "Main", "Apparel", "Gift Cards", "Services", "Books",
              "Jewelry & Accessories", "Snacks", "Candy", "Kitchen & Home",
              "Stuffed Animals", "Drinks - Cold", "Pet Supplies", "Swim",
              "Food - Fast", "Pub & Grub", "Tech & Electronics"
            ].map((category, index) => (
              <Text key={index} style={styles.categoryItem}>{category}</Text>
            ))}
          </ScrollView>
        </View>

        {/* Products Area */}
        <View style={styles.productsArea}>
          <View style={styles.productRow}>
            {Array(5).fill().map((_, index) => (
              <TouchableOpacity key={index} style={styles.productBox}>
                <Text>Product {index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.productRow}>
            {Array(5).fill().map((_, index) => (
              <TouchableOpacity key={index} style={styles.productBox}>
                <Text>Product {index + 6}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.productRow}>
            {Array(5).fill().map((_, index) => (
              <TouchableOpacity key={index} style={styles.productBox}>
                <Text>Product {index + 11}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Basket Area */}
        <View style={styles.basketArea}>
          <Text style={styles.customerName}>Anonymous NYC</Text>

          {/* Basket Header */}
          <View style={styles.basketHeader}>
            <Text style={styles.basketHeaderItem}>Item</Text>
            <Text style={styles.basketHeaderItem}>Qty</Text>
            <Text style={styles.basketHeaderItem}>Unit</Text>
            <Text style={styles.basketHeaderItem}>Amount</Text>
          </View>

          {/* Example Basket Item */}
          <View style={styles.basketItem}>
            <Text style={styles.basketItemText}>Breville Gourmet Baker</Text>
            <Text style={styles.basketItemText}>1</Text>
            <Text style={styles.basketItemText}>179.00</Text>
            <Text style={styles.basketItemText}>179.00</Text>
          </View>

          {/* Basket Summary */}
          <View style={styles.basketSummary}>
            <Text style={styles.basketSummaryText}>Subtotal: 179.00T</Text>
            <Text style={styles.basketSummaryText}>Tax: 12.53</Text>
            <Text style={styles.basketSummaryText}>Total: 191.53</Text>
          </View>

          {/* Basket Bottom Actions */}
          <View style={styles.basketActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Submit/Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Hold</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#cacaca',
    paddingBottom: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ececec',
    padding: 15,
    paddingHorizontal: 30,
  },
  backButton: {
    fontSize: 26,
    marginRight: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  mainContent: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
  },
  sidebar: {
    width: '30%',
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  categories: {
    gap: 10,
  },
  categoryItem: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#262626',
  },
  productsArea: {
    width: '40%',
    padding: 15,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productBox: {
    backgroundColor: '#fff',
    width: '18%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  basketArea: {
    width: '30%',
    backgroundColor: '#fff',
    padding: 15,
  },
  customerName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  basketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d1cccc',
    padding: 10,
    borderRadius: 5,
  },
  basketHeaderItem: {
    fontSize: 14,
    color: '#5d5959',
  },
  basketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  basketItemText: {
    fontSize: 14,
    color: '#000',
  },
  basketSummary: {
    marginTop: 15,
  },
  basketSummaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  basketActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#0b4657',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
