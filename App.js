import React, {useState} from 'react';
import {View, Text, StyleSheet, Image,Appearance} from 'react-native';
import darkMode from './styles/darkMode';
const App =()=>{
  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })
  return(
    <View style={theme == 'light'?styles.mainView:darkMode.mainView}>
        <View style={theme == 'light'?styles.toggleView:darkMode.toggleView}>
            <View style={theme == 'light'?styles.toggleLeft:darkMode.toggleLeft}><Text style={theme == 'light'?styles.toggleTextLeft:darkMode.toggleTextLeft}>Share Price</Text></View>
            <Text style={styles.toggleTextRight}>% Change</Text>
        </View>

        
        <View style={styles.sharePricesView}>
            <Text style={theme == 'light'?styles.stocksHeading:darkMode.stocksHeading}>Stocks</Text>
            
            {/* Facebook share price view */}
            <View style={theme=='light'?styles.stockView:darkMode.stockView}>
                <View style={styles.stockLogoAndName}>
                  <Image style={theme=='light'?styles.stockLogo:darkMode.stockLogo}
                    source={require('./assets/images/facebook.png')}
                  />
                   <View style={theme == 'light'?styles.stockNameView:darkMode.stockNameView}>
                      <Text style={theme == 'light'?styles.stockTicker:darkMode.stockTicker}>FB</Text>
                      <Text style={theme == 'light'?styles.stockName:darkMode.stockName}>Facebook Inc.</Text>
                   </View>
                </View>
                <Text style={theme=='light'?styles.stockPrice:darkMode.stockPrice}>$341,16</Text>
            </View>
            {/* Amazon share price view */}
            <View style={theme==='light'?styles.stockView:darkMode.stockView}>
                <View style={styles.stockLogoAndName}>
                  <Image style={theme=='light'?styles.stockLogo:darkMode.stockLogo}
                    source={require('./assets/images/amazon.png')}
                  />
                   <View style={theme === 'light'?styles.stockNameView:darkMode.stockNameView}>
                      <Text style={theme == 'light'?styles.stockTicker:darkMode.stockTicker}>AMZN</Text>
                      <Text style={theme == 'light'?styles.stockName:darkMode.stockName}>Amazon Inc.</Text>
                   </View>
                </View>
                <Text style={theme=='light'?styles.stockPrice:darkMode.stockPrice}>$3573,53</Text>
            </View>

            {/* Apple share price view */}
            <View style={theme==='light'?styles.stockView:darkMode.stockView}>
                <View style={styles.stockLogoAndName}>
                  <Image style={theme=='light'?styles.stockLogo:darkMode.stockLogo}
                    source={require('./assets/images/apple.png')}
                  />
                   <View style={theme === 'light'?styles.stockNameView:darkMode.stockNameView}>
                      <Text style={theme == 'light'?styles.stockTicker:darkMode.stockTicker}>APPL</Text>
                      <Text style={theme == 'light'?styles.stockName:darkMode.stockName}>Apple Inc.</Text>
                   </View>
                </View>
                <Text style={theme=='light'?styles.stockPrice:darkMode.stockPrice}>$146,39</Text>
            </View>

            {/* Netflix share price view */}
            <View style={theme==='light'?styles.stockView:darkMode.stockView}>
                <View style={styles.stockLogoAndName}>
                  <Image style={theme=='light'?styles.stockLogo:darkMode.stockLogo}
                    source={require('./assets/images/netflix.png')}
                  />
                   <View style={theme === 'light'?styles.stockNameView:darkMode.stockNameView}>
                      <Text style={theme == 'light'?styles.stockTicker:darkMode.stockTicker}>NFLX</Text>
                      <Text style={theme == 'light'?styles.stockName:darkMode.stockName}>Netflix Inc.</Text>
                   </View>
                </View>
                <Text style={theme=='light'?styles.stockPrice:darkMode.stockPrice}>$530,31</Text>
            </View>

            {/* Alphabet share price view */}
            <View style={theme==='light'?styles.stockView:darkMode.stockView}>
                <View style={styles.stockLogoAndName}>
                  <Image style={theme=='light'?styles.stockLogo:darkMode.stockLogo}
                    source={require('./assets/images/google.png')}
                  />
                   <View style={theme === 'light'?styles.stockNameView:darkMode.stockNameView}>
                      <Text style={theme == 'light'?styles.stockTicker:darkMode.stockTicker}>GOOG</Text>
                      <Text style={theme == 'light'?styles.stockName:darkMode.stockName}>Alphabet Inc.</Text>
                   </View>
                </View>
                <Text style={theme=='light'?styles.stockPrice:darkMode.stockPrice}>$2636,91</Text>
            </View>

            {/* Uber share price view */}
            <View style={theme==='light'?styles.stockView:darkMode.stockView}>
                <View style={styles.stockLogoAndName}>
                  <Image style={theme=='light'?styles.stockLogo:darkMode.stockLogo}
                    source={require('./assets/images/uber.png')}
                  />
                   <View style={theme === 'light'?styles.stockNameView:darkMode.stockNameView}>
                      <Text style={theme == 'light'?styles.stockTicker:darkMode.stockTicker}>UBER</Text>
                      <Text style={theme == 'light'?styles.stockName:darkMode.stockName}>Uber Technologies Inc.</Text>
                   </View>
                </View>
                <Text style={theme=='light'?styles.stockPrice:darkMode.stockPrice}>$46,19</Text>
            </View>
        </View>




    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    alignItems:'center',
    backgroundColor:'white'
  },
  sharePricesView:{
    width:'85%',
    marginTop:40,
  },
  stockNameView:{
    marginLeft:15
  },
  stockView:{
    width:'100%',
    height:60,
    borderBottomWidth:1,
    borderColor:'#E2E2E2',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  }, 
  stockLogoAndName:{
    display:'flex',
    flexDirection:'row'
  },
  stockPrice:{
    fontWeight:'bold',
    fontSize:15,
  },
  stockLogo:{
    width:31,
    height:31,
    backgroundColor:'#E2E2E2',
    borderRadius:100,
  },
  stockTicker:{
    fontWeight:'bold',
    fontSize:15,
  },
  toggleTextLeft:{
    fontWeight:'bold',
    fontSize:15,
  },
  toggleLeft:{
    width:110,
    height:20,
    backgroundColor:'#fff',
    borderRadius:5,
    marginLeft:5,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  toggleTextRight:{
    fontWeight:'bold',
    fontSize:15,
    marginRight:10,
  },
  toggleView:{
    width:210,
    height:30,
    backgroundColor:'#E2E2E2',
    display:'flex',
    flexDirection:'row',
    marginTop:80,
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:5,
  },
  stocksHeading:{
    fontSize:20,
    fontWeight:'bold'
  }
})
export default App;