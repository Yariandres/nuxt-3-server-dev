export default defineEventHandler(async (event) => {
  const { pokemon } = event.context.params;

  try {
    const response = await $fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    console.log(event.context);

    const idealRes = {
      id: response.id,
      name: response.name,
      sprite: response.sprites.front_default,
    };

    return idealRes;
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: `Cant find Pokemon name ${pokemon}`,
    });
  }
});
