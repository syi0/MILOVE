import VisGraph, {
  GraphData,
  GraphEvents,
  Options,
} from 'react-vis-graph-wrapper';
export default function GraphView() {
  const graph: GraphData = {
    nodes: [
      { id: 2, label: 'Auth', title: 'Authorization page' },
      { id: 1, label: 'Welcome page', title: 'Welcome page with some elements on it' },
      { id: 3, label: 'Register', title: 'register page with form for SignUp' },
      { id: 4, label: 'Login', title: 'login page with form for SignIn' },
      { id: 5, label: 'Email', title: 'EmailInput = email' },
      { id: 6, label: 'Password', title: 'PasswordInput = password' },
      { id: 7, label: 'Username', title: 'UsernameInput = text'},
      { id: 8, label: 'SocialApp', title: 'SocialApp is main body of social application'},
      { id: 9, label: 'Post', title: ''},
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 2, to: 4 },
      {from: 7, to: 3},
      { from: 5, to: 3 },
      { from: 6, to: 3},
      {from: 5, to: 4},
      { from: 6, to: 4 },
      { from: 2, to: 8},
      { from: 1, to: 8},
      { from: 8, to: 1},
      { from: 8, to: 2},
      
      
    ],
  };

  const options: Options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: '#000000',
    },
    height: '1080px',
  };

  const events: GraphEvents = {
    select: (event: any) => {
      const { nodes, edges } = event;
      console.log(nodes, edges);
    },
  };
  return (
    <VisGraph
      graph={graph}
      options={options}
      events={events}
      ref={(network: Network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
        console.log(network);
      }} className='graph'
    />
  );
}
