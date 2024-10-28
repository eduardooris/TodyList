import client from "../../../store/apollo";
import MUTATION_TASK from "../../../graphql/mutations/createTask";

interface CreateTask {
  title: string;
  description: string;
  isn_usuario: string;
}

export async function createTask({
  title,
  description,
  isn_usuario,
}: CreateTask) {
  try {
    const { data } = await client.mutate({
      mutation: MUTATION_TASK,
      variables: {
        title,
        description,
        isn_usuario,
      },
    });

    return data.addTask;
  } catch (error) {
    throw new Error("Error enquanto criava a tarefa");
  }
}
