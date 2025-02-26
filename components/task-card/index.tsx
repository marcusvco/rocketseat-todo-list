import { Image, Text, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { styles } from "./styles"
import { Button } from "../button"

interface Task {
  id: string
  text: string
  completed: boolean
}

interface Props {
  task: Task
  onComplete: () => void
  onDelete: () => void
}

export function TaskCard(props: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        disableText
        size={17}
        onPress={props.onComplete}
        fillColor="#4EA8DE"
      />
      <Text
        style={[!props.task.completed ? styles.text : styles.completedText]}
        numberOfLines={2}
      >
        {props.task.text}
      </Text>
      <Button
        children={<Image source={require("@/assets/images/trash.png")} />}
        onPress={props.onDelete}
      />
    </View>
  )
}
