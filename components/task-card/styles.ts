import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    height: 64,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#262626",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  text: {
    color: "#F2F2F2",
    flex: 1,
  },
  completedText: {
    color: "#808080",
    flex: 1,
    textDecorationLine: "line-through",
  },
})
