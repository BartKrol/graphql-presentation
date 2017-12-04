// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  Layout,
  Fill,
  CodePane,
  Fit,
  Code,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#272334",
  secondary: "#f3f2f6",
  tertiary: "#625C76",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
  quartenary: "Papyrus",
});

const images = {
  bart: require("../assets/bart.png"),
  bart2: require("../assets/bart2.png"),
  future: require("../assets/future.png"),
  arch1: require("../assets/architecture1.png"),
  arch2: require("../assets/architecture2.png"),
  arch3: require("../assets/architecture3.png"),
  components: require("../assets/components.jpg"),
  jquery: require("../assets/jquery.png"),
  innovation: require("../assets/innovation.png"),
  graphql: require("../assets/probstresspain.jpg"),
  query: require("../assets/query.png"),
  models: require("../assets/models.png"),
  apollo: require("../assets/apollo.png"),
  wow: require("../assets/wow.gif"),
  backbone: require("../assets/backbone.png"),
  angular: require("../assets/angular.png"),
  react: require("../assets/react.png"),
  arrow: require("../assets/arrow.png"),
  ajax: require("../assets/ajax.png"),
  dangerZone: require("../assets/danger-zone.jpg"),
  autocomplete: require("../assets/autocomplete.gif"),
  evolution: require("../assets/evolution.png"),
  graphData: require("../assets/graph-data.png"),
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            GraphQL in the Wild
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            Data Driven Development
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Layout>
            <Fill>
              <Text size={1} margin="50px 20px 0 0" textColor="secondary" bold>Name: Bart</Text>
              <Appear><Text size={1} margin="20px 20px 0 0" textColor="secondary" >Role: Fullstack Developer</Text></Appear>
              <Appear><Text size={1} margin="20px 20px 0 0" textColor="secondary" >Client: Riot Games</Text></Appear>
              <Appear><Text size={1} margin="20px 20px 0 0" textColor="secondary" >Hobby: LARP & RPG</Text></Appear>
              <Appear><Text size={1} margin="20px 20px 0 0" textColor="secondary" >Btw: #game-club</Text></Appear>
            </Fill>
            <Fill>
              <Image src={ images.bart2 } height="500" style={{ border: "1px solid #f3f2f6" }}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Let's go back into the future
          </Heading>
          <Image src={ images.future } />
        </Slide>

        <Slide bgColor="primary">
          <Image src={ images.jquery } />
        </Slide>

        <Slide bgColor="primary">
          <Image src={ images.backbone } width="400" />
          <Appear>
            <div>
              <Image src={ images.arrow } width="80" />
              <Image src={ images.angular } width="200"/>
            </div>
          </Appear>
          <Appear>
            <div>
              <Image src={ images.arrow } width="80"/>
              <Image src={ images.react } width="300"/>
            </div>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The Components Era
          </Heading>
          <Image src={ images.components } margin="30px auto" width="700" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Innovation
          </Heading>
          <Image src={ images.innovation } />
        </Slide>

        <Slide bgColor="primary">
          <Image src={ images.ajax } width="500" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Typical REST Webapp
          </Heading>
          <Image src={ images.arch1 } />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Typical REST Webapp
          </Heading>
          <Image src={ images.arch2 } />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Typical REST Webapp
          </Heading>
          <Image src={ images.arch3 } />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Data = Graph
          </Heading>
          <Image src={ images.graphData } />
        </Slide>

        <Slide bgColor="primary">
          <Image src={ images.graphql } height={600} />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How does it work?
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            (Graph) Query Language
          </Heading>
          <Image src={ images.query } height={400} />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Define your models
          </Heading>
          <Image src={ images.models } height={500} />
        </Slide>

        <Slide bgColor="primary">
          <iframe width="1000" height="600" src="http://graphql.org/swapi-graphql/" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={3} caps textColor="secondary">
            Mutations
          </Heading>
          <CodePane
            lang="graphql"
            source={require("raw-loader!../code/mutations.gql")}
            style={ { height: 420 } }
            textSize={ 20 }
          />
        </Slide>

        <Slide bgColor="primary">
          <iframe width="1000" height="600" src="http://localhost:3000" style={{ background: "#fcfcfc" }} />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={3} caps textColor="secondary">
            In real time too!
          </Heading>
          <Appear><Image src={ images.wow } margin="40px auto" height={ 450 } /></Appear>
        </Slide>

        <Slide bgColor="primary">
          <Layout>
            <Fill>
              <iframe width="390" height="600" src="http://localhost:3000/movie/284053" style={{ background: "#fcfcfc" }} />
            </Fill>
            <Fill>
              <iframe width="390" height="600" src="http://localhost:3000/movie/284053" style={{ background: "#fcfcfc" }} />
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={3} caps textColor="secondary" style={{ marginBottom: 50 }}>
            Subscriptions
          </Heading>
          <CodePane
            lang="graphql"
            source={require("raw-loader!../code/subscriptions.gql")}
            style={ { height: 420 } }
            textSize={ 30 }
          />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={3} caps fit textColor="secondary">
            Even more reactivity
          </Heading>
          <Appear><ListItem margin="40px 0 0 0">
            <Code bgColor="tertiary" textColor="primary">@defer</Code> - lazy load data from heavy operations
          </ListItem></Appear>
          <Appear><ListItem margin="40px 0 0 0">
            <Code bgColor="tertiary" textColor="primary">@stream</Code> - load data for arrays as you go
          </ListItem></Appear>
          <Appear><ListItem margin="40px 0 0 0">
            <Code bgColor="tertiary" textColor="primary">@live</Code> - update one value periodically
          </ListItem></Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Is that all?
          </Heading>
          <Appear><Heading size={1} margin="40px 0 0 0" caps lineHeight={1} textColor="secondary">
            Yeah, pretty much...
          </Heading></Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Enter GraphQL Clients!
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={3} caps textColor="secondary">
            How does it work?
          </Heading>
          <Appear><Image src={images.apollo} margin="40px auto" height={ 450 } /></Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} fit caps textColor="secondary">
            What else client can do?
          </Heading>
          <List>
            <Appear><ListItem margin="40px 0 0 0">
              Abstraction for data connection
            </ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">
              Updating the store
            </ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">
              Notifying components
            </ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">
              Query batching
            </ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">
              Pagination
            </ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">
              And many more...
            </ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Enter GraphQL Tools
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} caps textColor="secondary">
            Autocomplete
          </Heading>
          <Image margin="40px auto" src={images.autocomplete} />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} caps textColor="secondary">
            What do types give us?
          </Heading>
          <Appear><Image margin="40px auto" src={images.dangerZone} /></Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} caps textColor="secondary">
            Types generation
          </Heading>
          <Layout style={{ marginTop: 50 }}>
            <Appear>
              <div style={{ width: 300 }}>
                <CodePane
                  lang="graphql"
                  source={require("raw-loader!../code/gtype.gql")}
                  textSize={ 20 }
                />
              </div>
            </Appear>
            <Appear>
              <div style={{ marginTop: 150, marginLeft: 10 }}>
                <Text textColor="secondary" textSize="20">apollo-codegen </Text>
                <Text textColor="secondary" textSize="20">⟶</Text>
              </div>
            </Appear>
            <Appear>
              <div style={{ width: 300, marginLeft: 10 }}>
                <CodePane
                  lang="typescript"
                  source={require("raw-loader!../code/type.template")}
                  textSize={ 20 }
                />
              </div>
            </Appear>
          </Layout>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} caps textColor="secondary">
            What next?
          </Heading>
          <Image margin="20px auto" src={images.future2} width="600"/>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Query stitching - composable GraphQL
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            Think in Graphs, not endpoints
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps fit textColor="secondary">
            GraphQL is a thin abstraction
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Evolution
          </Heading>
          <Image src={ images.evolution } width="700" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary" textFont="quartenary">
            That's all folks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
