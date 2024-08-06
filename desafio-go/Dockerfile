FROM golang:1.22-alpine AS builder
WORKDIR /usr/src/app
COPY go.mod fullcyclerocks.go ./
RUN go build -v -o /usr/local/bin/app ./...

FROM scratch
COPY --from=builder /usr/local/bin/app /usr/local/bin/app
CMD ["app"]