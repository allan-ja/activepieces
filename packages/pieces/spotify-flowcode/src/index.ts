import { createPiece } from '@activepieces/pieces-framework';
import actions from './lib/actions';
import triggers from './lib/triggers';
import { spotifyCommon } from './lib/common';

export const spotify = createPiece({
  displayName: 'Spotify Flowcode',
  auth: spotifyCommon.authentication,
  minimumSupportedRelease: '0.5.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/spotify.png',
  authors: ['allan-ja'],
  actions,
  triggers,
});
