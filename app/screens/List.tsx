import { View, Text, Button, TextInput, FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import { FIRESTORE_DB } from '../../firebase'
import { addDoc,collection, doc, onSnapshot } from 'firebase/firestore'

export interface Todo{
  title :string;
  done: boolean;
  id: string;
}
 
const List = ({navigation}:any) => {
    const [todos, setTodos]= useState<Todo[]>([]);
    const [todo, setTodo]= useState("");
    useEffect(() => {
      const todoRef = collection(FIRESTORE_DB,'todos');

      const subscriber = onSnapshot(todoRef, {
        next:(snapshot) => {
          const todos: Todo[] =[];
          snapshot.docs.forEach(doc =>{
            todos.push({
              id:doc.id,
              ...doc.data(),
            }as Todo);
          });
          setTodos(todos);
        },
      });
      return () => subscriber();
    }, [])
     const addTodo = async () =>{
        console.log('Add ');

        const doc = await addDoc(collection(FIRESTORE_DB,'todos'),{title:todo, done:false});
        setTodo("");
     }
     const renderTodo =({item}:any) =>{
      return(
        <Text>{item.title}</Text>
      )
    }
  return (
    <View>
      <View>
        <TextInput style={{height:50,marginBottom:20}} placeholder='Add todo' onChangeText={(text:string)=> setTodo(text)} value={todo}/>
      <Button onPress={addTodo} title='Add Todo' disabled={todo===""}/>
      </View>
      { todos.length > 0 && (
        <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
         <FlatList
         data={todos}
         renderItem={renderTodo}
         keyExtractor={(todo:Todo) => todo.id}
         />
       </View>
      )}
     
    </View>
  )
}

export default List