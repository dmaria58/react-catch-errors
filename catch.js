export default function catchErrors({ filename, components, imports }) {
  const [React] = imports;

  if (!React || !React.Component) {
    throw new Error('imports[0] for react-catch-errors does not look like React.');
  }


  return function returnCatchErrors(ReactClass) {
    //render
    const h_render = ReactClass.prototype.render;
    Object.defineProperty(ReactClass.prototype, 'render', {
      configurable: true,
      value: function tryRender() {
        try {
          return h_render.apply(this, arguments);
        } catch (err) {
          console.error(err);
          return React.createElement('div', { toWhat: 'world'}, err+"");
        }        
      }
    });
    //componentWillUpdate
    const h_componentWillUpdate = ReactClass.prototype.componentWillUpdate;
    Object.defineProperty(ReactClass.prototype, 'componentWillUpdate', {
      configurable: true,
      value: function tryRender() {
        try{
          if(!h_componentWillUpdate) return
           return h_componentWillUpdate.apply(this, arguments);
        }catch(err){
          console.error(err)
        }       
      }
    });
    //componentWillReceiveProps
    var h_componentWillReceiveProps =ReactClass.prototype.componentWillReceiveProps;
    Object.defineProperty(ReactClass.prototype, 'componentWillReceiveProps', {
      configurable: true,
      value: function tryRender() {
        try{
          if(!h_componentWillReceiveProps) return
           return h_componentWillReceiveProps.apply(this, arguments);
        }catch(err){
          console.error(err)
        }       
      }
    }); 
    //componentDidUpdate
    var h_componentDidUpdate =ReactClass.prototype.componentDidUpdate;
    Object.defineProperty(ReactClass.prototype, 'componentDidUpdate', {
      configurable: true,
      value: function tryRender() {
        try{
          if(!h_componentDidUpdate) return
           return h_componentDidUpdate.apply(this, arguments);
        }catch(err){
          console.error(err)
        }       
      }
    });      
    //componentWillUnmount
    var h_componentWillUnmount =ReactClass.prototype.componentWillUnmount;
    Object.defineProperty(ReactClass.prototype, 'componentWillUnmount', {
      configurable: true,
      value: function tryRender() {
        try{
          if(!h_componentWillUnmount) return
           return h_componentWillUnmount.apply(this, arguments);
        }catch(err){
          console.error(err)
        }       
      }
    }); 
    //componentWillMount
    var h_componentWillMount =ReactClass.prototype.componentWillMount;
    Object.defineProperty(ReactClass.prototype, 'componentWillMount', {
      configurable: true,
      value: function tryRender() {
        try{
          if(!h_componentWillMount) return
           return h_componentWillMount.apply(this, arguments);
        }catch(err){
          console.error(err)
        }       
      }
    });    
    //componentDidMount
    var h_componentDidMount =ReactClass.prototype.componentDidMount;
    Object.defineProperty(ReactClass.prototype, 'componentDidMount', {
      configurable: true,
      value: function tryRender() {
        try{
          if(!h_componentDidMount) return
           return h_componentDidMount.apply(this, arguments);
        }catch(err){
          console.error(err)
        }       
      }
    });          
    return ReactClass;
  };
}