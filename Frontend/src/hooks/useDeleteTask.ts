
export const useDeleteTask = () => {

    const deleteTask = async (id: string) => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/tasks/${id}`, {
                method: "DELETE",
            }
            )

        } catch (e) {
            console.log(e);

        }
    }

    return { deleteTask }
}