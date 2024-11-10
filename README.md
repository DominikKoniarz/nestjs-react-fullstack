State of the project on 10.11 at 22:44: <br/>
Made ssr of react working with express server.<br/>
Rendering components on server that use hooks works.<br/>
Then on client side hydration is done.<br/>
Client side code works as expected.<br/>

Next steps:<br/>
Separate client components from server components.<br/>
Use "use client" to mark component as client side also rendered on the server on request, but it's code will be sent to the client.<br/>
