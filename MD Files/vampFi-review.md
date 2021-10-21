# Code Review

## VampFi

- Vamp styling
- File upload
- webhooks
- system functions
- system entities

### Vue

- Vue router

## Resido

### Typescript

- `ProcessMessage.ts` - Review typescript code

        public stages: { [key: string]: (data: ActionData) => any } = {
          initiated: (data) => new Initiated().handle(data),
          recieved: (data) => new Recieved().handle(data),
          costed: (data) => new Costed().handle(data),
          paying: (data) => new Paying().handle(data),
          paid: (data) => new Paid().handle(data),
          completed: (data) => new Completed().handle(data)
        };

