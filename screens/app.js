
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// PRODUCTS
const PRODUCTS = [
  {
    id: "1",
    name: "iPad 8",
    category: "Tablet",
    price: 880,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
    description: "A powerful and versatile tablet perfect for entertainment, studying and everyday productivity."
  },
  {
    id: "2",
    name: "iPhone X",
    category: "iPhone",
    price: 750,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
    description: "A stylish smartphone with a beautiful display and excellent camera."
  },
  {
    id: "3",
    name: "Samsung S21",
    category: "Samsung",
    price: 990,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    description: "A premium smartphone with elegant design and impressive performance."
  },
  {
    id: "4",
    name: "Wireless Mouse",
    category: "Mouse",
    price: 45,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    description: "A comfortable wireless mouse for work and everyday computer use."
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    category: "Keyboard",
    price: 120,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    description: "A responsive mechanical keyboard with a comfortable typing experience."
  },
  {
    id: "6",
    name: "iPad Pro",
    category: "Tablet",
    price: 1200,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600",
    description: "A high-performance tablet designed for creativity and productivity."
  }
];

const CATEGORIES = [
  { name: "Tablet", icon: "▣" },
  { name: "Mouse", icon: "🖱" },
  { name: "Keyboard", icon: "⌨" }
];

export default function App() {
  const [page, setPage] = useState("Home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [cart, setCart] = useState([]);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart((oldCart) => [...oldCart, product]);
    Alert.alert("Success", product.name + " added to cart!");
  };

  const goHome = () => {
    setSelectedProduct(null);
    setPage("Home");
  };

  // PRODUCT DETAILS
  const renderDetails = () => (
    <ScrollView style={styles.page}>
      <TouchableOpacity onPress={goHome} style={styles.backButton}>
        <Text style={styles.backText}>← Back to products</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: selectedProduct.image }}
        style={styles.detailImage}
      />

      <View style={styles.detailContent}>
        <Text style={styles.categoryText}>
          {selectedProduct.category}
        </Text>

        <Text style={styles.detailName}>
          {selectedProduct.name}
        </Text>

        <Text style={styles.detailPrice}>
          ${selectedProduct.price}
        </Text>

        <Text style={styles.sectionTitle}>
          Product description
        </Text>

        <Text style={styles.detailDescription}>
          {selectedProduct.description}
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => addToCart(selectedProduct)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  // HOME SCREEN
  const renderHome = () => (
    <ScrollView
      style={styles.page}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.logo}>TechStore</Text>
        <Text style={styles.subtitle}>
          Find your favorite technology
        </Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        {CATEGORIES.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.categoryBox,
              category === item.name && styles.categoryActive
            ]}
            onPress={() => {
              setCategory(
                category === item.name ? "All" : item.name
              );
              setShowAll(false);
            }}
          >
            <Text style={styles.categoryIcon}>{item.icon}</Text>
            <Text style={styles.categoryLabel}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>
        Most popular products
      </Text>

      {filteredProducts.length === 0 && (
        <Text style={styles.emptyText}>No products found.</Text>
      )}

      {(showAll
        ? filteredProducts
        : filteredProducts.slice(0, 3)
      ).map((product) => (
        <TouchableOpacity
          key={product.id}
          style={styles.productCard}
          activeOpacity={0.8}
          onPress={() => {
            setSelectedProduct(product);
            setPage("Details");
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={styles.productImage}
          />

          <View style={styles.productInfo}>
            <Text style={styles.productName}>
              {product.name}
            </Text>

            <Text style={styles.categoryText}>
              {product.category}
            </Text>

            <Text style={styles.description} numberOfLines={3}>
              {product.description}
            </Text>

            <Text style={styles.price}>
              ${product.price}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {filteredProducts.length > 3 && (
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setShowAll(!showAll)}
        >
          <Text style={styles.buttonText}>
            {showAll ? "Show Less" : "View More"}
          </Text>
        </TouchableOpacity>
      )}

      <View style={{ height: 25 }} />
    </ScrollView>
  );

  // CART SCREEN
  const renderCart = () => {
    const total = cart.reduce(
      (sum, product) => sum + product.price,
      0
    );

    return (
      <ScrollView style={styles.page}>
        <Text style={styles.pageTitle}>Shopping Cart</Text>

        {cart.length === 0 ? (
          <Text style={styles.emptyText}>
            Your shopping cart is empty.
          </Text>
        ) : (
          <>
            {cart.map((product, index) => (
              <View key={`${product.id}-${index}`} style={styles.cartItem}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.cartImage}
                />

                <View style={{ flex: 1 }}>
                  <Text style={styles.productName}>
                    {product.name}
                  </Text>
                  <Text style={styles.categoryText}>
                    ${product.price}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    setCart((old) =>
                      old.filter((_, i) => i !== index)
                    )
                  }
                >
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}

            <Text style={styles.total}>
              Total: ${total}
            </Text>
          </>
        )}
      </ScrollView>
    );
  };

  // ABOUT SCREEN
  const renderAbout = () => (
    <View style={styles.about}>
      <Text style={styles.aboutIcon}>▣</Text>

      <Text style={styles.aboutTitle}>About TechStore</Text>

      <Text style={styles.aboutText}>
        Welcome to TechStore!
      </Text>

      <Text style={styles.aboutText}>
        Discover smartphones, tablets, computer accessories
        and more in one convenient place.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        {page === "Home" && renderHome()}
        {page === "Details" && renderDetails()}
        {page === "Cart" && renderCart()}
        {page === "About" && renderAbout()}
      </View>

      {page !== "Details" && (
        <View style={styles.bottomNav}>
          {[
            { name: "Home", icon: "⌂" },
            { name: "Cart", icon: "▢" },
            { name: "About", icon: "▣" }
          ].map((tab) => (
            <TouchableOpacity
              key={tab.name}
              style={styles.navItem}
              onPress={() => setPage(tab.name)}
            >
              <View>
                <Text
                  style={[
                    styles.navIcon,
                    page === tab.name && styles.activeNav
                  ]}
                >
                  {tab.icon}
                </Text>

                {tab.name === "Cart" && cart.length > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                      {cart.length}
                    </Text>
                  </View>
                )}
              </View>

              <Text style={styles.navText}>{tab.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  content: {
    flex: 1
  },

  page: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF"
  },

  header: {
    marginTop: 18,
    marginBottom: 18
  },

  logo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#343D52"
  },

  subtitle: {
    color: "#999",
    marginTop: 4
  },

  search: {
    height: 45,
    backgroundColor: "#F1F2F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20
  },

  categories: {
    marginBottom: 25,
    flexGrow: 0
  },

  categoryBox: {
    width: 100,
    height: 85,
    backgroundColor: "#343D52",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12
  },

  categoryActive: {
    borderWidth: 2,
    borderColor: "#20C9ED"
  },

  categoryIcon: {
    color: "#20C9ED",
    fontSize: 27
  },

  categoryLabel: {
    color: "#FFFFFF",
    fontSize: 13,
    marginTop: 5
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 20
  },

  productCard: {
    flexDirection: "row",
    marginBottom: 27,
    minHeight: 120
  },

  productImage: {
    width: 100,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#EEE"
  },

  productInfo: {
    flex: 1,
    paddingLeft: 12
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111"
  },

  categoryText: {
    color: "#20C9ED",
    fontSize: 13,
    marginTop: 3
  },

  description: {
    color: "#222",
    fontSize: 13,
    fontStyle: "italic",
    lineHeight: 18,
    marginTop: 3
  },

  price: {
    alignSelf: "flex-start",
    backgroundColor: "#343D52",
    color: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 9,
    paddingVertical: 2,
    marginTop: 5,
    fontWeight: "bold"
  },

  primaryButton: {
    height: 50,
    backgroundColor: "#20C9ED",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold"
  },

  bottomNav: {
    height: 65,
    backgroundColor: "#343D52",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  navIcon: {
    fontSize: 25,
    color: "#FFFFFF"
  },

  activeNav: {
    color: "#20C9ED"
  },

  navText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 3
  },

  badge: {
    position: "absolute",
    right: -9,
    top: -5,
    backgroundColor: "#20C9ED",
    borderRadius: 10,
    minWidth: 17,
    height: 17,
    alignItems: "center",
    justifyContent: "center"
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 10
  },

  detailImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#EEE"
  },

  backButton: {
    paddingVertical: 18
  },

  backText: {
    color: "#343D52",
    fontSize: 15
  },

  detailContent: {
    paddingVertical: 20
  },

  detailName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#343D52"
  },

  detailPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#20C9ED",
    marginVertical: 18
  },

  detailDescription: {
    fontSize: 15,
    lineHeight: 24,
    color: "#777"
  },

  pageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#343D52",
    marginTop: 25,
    marginBottom: 25
  },

  emptyText: {
    color: "#999",
    textAlign: "center",
    marginTop: 40
  },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#EEE"
  },

  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 8
  },

  removeText: {
    color: "#E05252",
    fontSize: 12
  },

  total: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#343D52",
    marginTop: 25
  },

  about: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },

  aboutIcon: {
    fontSize: 65,
    color: "#20C9ED"
  },

  aboutTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#343D52",
    marginVertical: 20
  },

  aboutText: {
    color: "#777",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 12
  }
});
