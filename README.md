State of the project on 10.11 at 22:44:
Made ssr of react working with express server.
Rendering components on server that use hooks works.
Then on client side hydration is done.
Client side code works as expected.

Next steps:
Separate client components from server components.
Use "use client" to mark component as client side also rendered on the server on request, but it's code will be sent to the client.
