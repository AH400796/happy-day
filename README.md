This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Docker short instruction:

1. docker build -t happyday:latest .
2. docker run -d -p 3000:3000 happyday
3. docker start CONT_ID
4. docker images (список імейджів)

5. docker tag happyday ah400796/happyday (перейменовуємо з дод. маркера репозиторію)
6. docker push ah400796/happyday (пушимо на репозиторій dockerhub)

### Docker on Server:

1. docker pull ah400796/happyday (скачуємо образ з репозиторію)
2. docker run -d -p
   194.28.87.70:443:3000 --name happyday --rm ah400796/happyday (створюємо контейнер)

### SERVER

Конект до сервера:

ssh root@**.**.**.**(IP) / password
Установка Docker на сервері з OS AlmaLinux через термінал:

Для установки Docker на сервері з операційною системою AlmaLinux через термінал виконайте наступні кроки:

1. Оновлення системи:
   Відкрийте термінал або підключіться до сервера за допомогою SSH. Перш ніж розпочати установку Docker, рекомендується оновити пакети системи до останньої версії. Виконайте наступну команду:

sudo dnf update

2. Установка Docker:
   Після оновлення системи виконайте наступні команди для установки Docker:

sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io

3. Запуск та активація Docker служби:
   Після встановлення Docker, запустіть службу та встановіть її для автоматичного запуску при старті системи:

sudo systemctl start docker
sudo systemctl enable docker

4. Перевірка версії Docker:
   Переконайтеся, що Docker встановлений правильно, запустився і працює, виконавши команду:

docker --version
