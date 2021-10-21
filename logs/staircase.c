int main(void)
{
    int n = 5;
    int row = 0;

    do
    {
        n = get_int("Height of pyramid: ");
    }
    while (n < 1 || n > 8);


    while (row < n)
    {

    for (int i = n - 1; i > row; i--)
    {
        printf(" ");
    }
    for (int j = 0; j <= row; j++)
    {
        printf("#");
    }
    printf("  ");
    for (int k = 0; k <= row; k++)
    {
        printf("#");
    }
    printf("\n");

     row++;
    }
}
