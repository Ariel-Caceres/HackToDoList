
export const useUpdateIsDone = () => {

    const updateIsDone = async (id: string) => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}` + "/api/tasks/update/is-done", {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({ id })
            })

        } catch (e) {
            console.log(e);
        }
    }
    return { updateIsDone }
}
