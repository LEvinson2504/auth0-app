import { useFetchUser } from "../lib/user"
import Layout from "../components/layout"
import { Box, Tag } from "@chakra-ui/react"

function Appointments({data}){
    const { user, loading } = useFetchUser()
    console.log(data)

    return <Layout user={user} loading={loading}>
        <h1>Appointments</h1>
        {/* Working */}
        <h1>{ data[0].id } </h1>
        {
            data.map( app => {
                // const start_time = new Date(app.start_time)
                // console.log(start_time);
                // Not working
                return <Box key={app.id}>
                    <h1>{app.title}</h1>
                    <Tag>{new Date(app.start_time).toLocaleTimeString()} -
                        {new Date(app.end_time).toLocaleTimeString()}</Tag>
                    </Box>
            })
        }
    </Layout>
}

export default Appointments

export async function getServerSideProps(context){
    const data = await fetch("http://localhost:1337/appointments")
    const json_data = await data.json()
    console.log(json_data)

    return {
        props: {
            data: json_data
        }
    }
}