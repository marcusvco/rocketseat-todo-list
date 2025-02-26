import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  header: {
    marginTop: 32,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  createdText: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  completedText: {
    color: "#8284FA",
    fontWeight: "bold",
  },
  textContainer: {
    gap: 8,
    flexDirection: "row",
  },
  countContainer: {
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: "#333333",
    alignItems: "center",
  },
  countText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
})
