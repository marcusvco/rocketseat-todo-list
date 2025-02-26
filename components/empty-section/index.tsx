import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { Clipboard } from "lucide-react-native"

export function EmptySection() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/Clipboard.png")} />
      <View>
        <Text style={styles.boldText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
