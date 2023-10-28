import { Property, createAction } from "@activepieces/pieces-framework";
import { spotifyCommon, makeClient } from "../common";

export default createAction({
    name: 'get_track_info',
    displayName: 'Get Track Info',
    description: 'Retrieves details of a track',
    auth: spotifyCommon.authentication,
    props: {
        track_id: Property.ShortText({
            displayName: 'Track ID',
            required: true
        })
    },
    async run({auth, propsValue}) {
        const client = makeClient({auth})
        return await client.getTrack(propsValue.track_id as string)
    }
})