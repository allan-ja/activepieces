import { Property, createAction } from "@activepieces/pieces-framework";
import { spotifyCommon, makeClient } from "../common";

export default createAction({
    name: 'get_artist_info',
    displayName: 'Get Artist Info',
    description: 'Retrieves details of a artist',
    auth: spotifyCommon.authentication,
    props: {
        artist_id: Property.ShortText({
            displayName: 'Artist ID',
            required: true
        })
    },
    async run({auth, propsValue}) {
        const client = makeClient({auth})
        return await client.getArtist(propsValue.artist_id as string)
    }
})