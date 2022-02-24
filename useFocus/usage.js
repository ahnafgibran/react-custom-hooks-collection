const Example = () => {
    const [isFocused, bind] = useFocus();
  
    return (
      <div>
        <input {...bind} placeholder="Focus me" />
        <div>You are {isFocused ? 'focusing' : 'not focusing'} the input</div>
      </div>
    );
  };