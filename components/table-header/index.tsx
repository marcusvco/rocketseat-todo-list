import { Text, View } from "react-native"
import { styles } from "./styles"

interface Props {
  created: number
  completed: number
}

export function TableHeader(props: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.createdText}>Criadas</Text>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{props.created}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.completedText}>Concluídas</Text>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{props.completed}</Text>
        </View>
      </View>
    </View>
  )
}
