import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '@server/trpc/trpc.router';

export const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/trpc`, // you should update this to use env variables
		}),
	],
});

// nextjs-nestjs-trpc-production-053a.up.railway.app
