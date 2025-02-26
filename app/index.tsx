import { Button } from "@/components/button"
import { TableHeader } from "@/components/table-header"
import { useState } from "react"
import { Alert, FlatList, Image, TextInput, View } from "react-native"
import uuid from "react-native-uuid"
import { styles } from "./styles"
import { TaskCard } from "@/components/task-card"
import { EmptySection } from "@/components/empty-section"
import { Header } from "@/components/header"

interface Task {
  id: string
  text: string
  completed: boolean
}

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState("")

  function getCompletedTasks() {
    return tasks.filter((task) => task.completed).length
  }

  function handleAddTask() {
    if (!taskText) return

    setTasks([...tasks, { id: uuid.v4(), text: taskText, completed: false }])
    setTaskText("")
  }

  function handleCompletTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed }
        }

        return task
      })
    )
  }

  function handleDeleteTask(id: string) {
    Alert.alert("Remover tarefa", "Deseja excluir esta tarefa?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => setTasks(tasks.filter((task) => task.id !== id)),
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            style={styles.input}
            value={taskText}
            onChangeText={setTaskText}
          />
          <Button
            children={<Image source={require("@/assets/images/plus.png")} />}
            color="#1E6F9F"
            onPress={handleAddTask}
          />
        </View>

        <TableHeader created={tasks.length} completed={getCompletedTasks()} />

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard
              key={item.id}
              task={item}
              onComplete={() => handleCompletTask(item.id)}
              onDelete={() => handleDeleteTask(item.id)}
            />
          )}
          ListEmptyComponent={<EmptySection />}
        />
      </View>
    </View>
  )
}
